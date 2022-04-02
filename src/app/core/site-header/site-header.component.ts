import { Component, ElementRef, HostListener, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '@app/core/translations';
import { CorePath, LocalStorageKeys } from '@app/shared/models';
import { AuthService } from '@app/core/auth';
import { Subject, fromEvent, takeUntil } from 'rxjs';

interface Language {
  code: LanguageCode;
  text: string;
}

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
})
export class SiteHeaderComponent implements AfterViewInit, OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();
  isOpen: boolean = false;
  scrolled: boolean = false;

  /** enum */
  corePath = CorePath;

  languages: Language[] = [
    { code: LanguageCode.uk_UA, text: 'Українська' },
    { code: LanguageCode.ru_RU, text: 'Русский' },
    { code: LanguageCode.en_GB, text: 'English' },
    { code: LanguageCode.pl_PL, text: 'Polski' },
  ];
  activeLanguage: Language | undefined;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    public readonly authService: AuthService
  ) {
    this.translateService.onLangChange.subscribe((params) => {
      localStorage.setItem(LocalStorageKeys.LangOption, params.lang);
      this.activeLanguage = this.getActiveLanguage(params.lang as keyof typeof LanguageCode);
    });
  }

  @ViewChild('navbarSupportedContent', { read: ElementRef }) navBar!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    fromEvent(this.navBar.nativeElement, 'shown.bs.collapse')
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isOpen = true;
      });

    fromEvent(this.navBar.nativeElement, 'hidden.bs.collapse')
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isOpen = false;
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }

  getActiveLanguage(langCode: keyof typeof LanguageCode) {
    return this.languages.find((lang: Language) => lang.code === langCode);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  getHeaderClass() {
    return {
      transparent: !this.isMobileOrSubPage(),
      solid: this.router.url !== '/' || this.isOpen || this.scrolled,
    };
  }

  public isMobileOrSubPage(): boolean {
    const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      return isMobile;
    }
    return this.router.url !== '/';
  }

  getMenuClass() {
    return {
      opened: this.isOpen,
    };
  }

  closeMenu() {
    this.isOpen = false;
  }

  useLanguage(langCode: string) {
    this.translateService.use(langCode);
    this.closeMenu();
  }

  public get isAccountUrl(): boolean {
    return this.router.url.includes(CorePath.MyAccount);
  }
}
