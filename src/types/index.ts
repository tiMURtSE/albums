interface ITheme {
    colors: {
      primary: string
      secondary: string
    }
  
    media: {
      extraLarge: string
      large: string
      medium: string
      small: string
    }
  
    sizes: {
      header: { height: string }
      container: { width: string }
      footer: { height: number }
      font: { small: string, regular: string, large: string }
      modal: { width: number }
    }
  
    durations: {
      ms300: number
    }
  
    order: {
      header: number
      modal: number
    },

    zIndexes: {
        header: number
    }
};

export type { ITheme };