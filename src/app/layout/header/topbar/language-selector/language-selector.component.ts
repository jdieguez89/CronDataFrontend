// Angular
import {Component, Input, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
// RxJS
import {filter} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

// Translate

interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent implements OnInit {
  // Public properties
  @Input() iconType!: '' | 'brand';

  language!: LanguageFlag;
  languages: LanguageFlag[] = [
    {
      lang: 'en',
      name: 'English',
      flag: './assets/media/svg/flags/226-united-states.svg'
    },
    {
      lang: 'es',
      name: 'Spanish',
      flag: './assets/media/svg/flags/128-spain.svg'
    }
  ];

  /**
   * Component constructor
   *
   * @param translationService: TranslationService
   * @param router: Router
   */
  constructor(private translationService: TranslateService, private router: Router) {
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit(): void {
    this.setDefaultLang();
    this.setSelectedLanguage();
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(event => {
        this.setSelectedLanguage();
      });
  }

  setDefaultLang(): void {
    this.language = this.languages[0];
  }

  /**
   * Set language
   *
   * @param lang: any
   */
  setLanguage(lang: string): void {
    this.translationService.use(lang);
    this.translationService.setDefaultLang(lang);
  }

  /**
   * Set selected language
   */
  setSelectedLanguage(): any {
    this.setLanguage(this.translationService.getBrowserLang());
  }
}
