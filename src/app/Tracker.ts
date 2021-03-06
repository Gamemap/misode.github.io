const event = (category: string, action: string, label?: string) => 
  ga('send', 'event', category, action, label)

const dimension = (index: number, value: string) => 
  ga('set', `dimension${index}`, value);

export const Tracker = {
  pageview: (target: string) => {
    ga('set', 'page', target)
    ga('send', 'pageview')
  },

  setTheme: (theme: string) => event('Generator', 'set-theme', theme),
  setVersion: (version: string) => event('Generator', 'set-version', version),
  setPreview: (name: string) => event('Preview', 'set-preview', name),
  setLanguage: (language: string) => event('Generator', 'set-language', language),
  reset: () => event('Generator', 'reset'),
  undo: (hotkey = false) => event('Generator', 'undo', hotkey ? 'Hotkey' : 'Menu'),
  redo: (hotkey = false) => event('Generator', 'redo', hotkey ? 'Hotkey' : 'Menu'),
  copy: () => event('JsonOutput', 'copy'),
  download: () => event('JsonOutput', 'download'),
  share: () => event('JsonOutput', 'share'),
  toggleErrors: (visible: boolean) => event('Errors', 'toggle', visible ? 'visible' : 'hidden'),
  hidePreview: () => event('Preview', 'hide-preview'),
  toggleMinimize: (minimized: boolean) => event('Generator', 'toggle-minimize', minimized ? 'minimized' : 'unminimized'),
  loadPreset: (preset: string) => event('Generator', 'load-preset', preset),

  dimTheme: (theme: string) => dimension(1, theme),
  dimVersion: (version: string) => dimension(3, version),
  dimLanguage: (language: string) => dimension(4, language),
  dimPreview: (preview: string) => dimension(5, preview),
}
