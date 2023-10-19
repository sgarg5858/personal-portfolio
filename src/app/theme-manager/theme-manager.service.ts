import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, map, merge, shareReplay, startWith, tap } from 'rxjs';
export type Theme = 'light' | 'dark';
export type ThemeUrl = `${Theme}-theme.css`;

@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {

  #themePreferenceQuery = matchMedia(`(prefers-color-scheme:light)`);
  #themeSwitcher = new BehaviorSubject<Theme>(resolvedPrefferedTheme(this.#themePreferenceQuery));
  #userEnvThemePreference =fromEvent<MediaQueryList>(this.#themePreferenceQuery,'change').pipe(
    startWith(this.#themePreferenceQuery),
    map(resolvedPrefferedTheme));

    theme$= merge(
      this.#userEnvThemePreference,
      this.#themeSwitcher
    ).pipe(
      tap((theme)=>{
        loadTheme(getThemeLinkElement(),theme);
      }),
      shareReplay()
    );

    switchTheme(theme:Theme)
    {
      this.#themeSwitcher.next(theme);
    } 
  }
  
function resolvedPrefferedTheme(query:MediaQueryList): Theme
{
  console.log(query);
  return query.matches ? 'light': 'light';
}
function getThemeLinkElement():HTMLLinkElement{
  const existingLinkElement = document.head.querySelector('#appTheme') as HTMLLinkElement;
  if(existingLinkElement) return existingLinkElement;
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel','stylesheet');
  linkEl.setAttribute('id','appTheme');
  document.head.querySelector(`link[rel="stylesheet"]:last-of-type`)?.after(linkEl);
  return linkEl;
}

function loadTheme(linkElement:HTMLLinkElement,theme:Theme)
{
  linkElement.setAttribute("href",resolveThemeUrl(theme))
}
function resolveThemeUrl(themeName:Theme):ThemeUrl{
  return `${themeName}-theme.css`
}