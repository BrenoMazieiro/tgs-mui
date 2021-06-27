const genericDesign = {
  fonts: {
    primary: 'Roboto, sans-serif',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
    quote: 'Georgia, serif',
  },
  sizes: {
    pagesBreakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xlg: '1200px',

    },
    maxWidth: '1100px',
    headerWidth: '1400px',
    text: {
      large: '32px',
      medium: '24px',
      small: '16px',
    },
    button: {
      lg: {
        width: '440px',
        height: '40px',
      },
      md: {
        width: '220px',
        height: '20px',
      },
      sm: {
        width: '110px',
        height: '10px',
      },
    },
    img: {
      lg: {
        width: '256px',
        height: '256px',
      },
      md: {
        width: '128px',
        height: '128px',
      },
      sm: {
        width: '64px',
        height: '64px',
      },
    },
  },
}

const darkLight = {
  dark: {
    colors: {
      primary: ['#0077B6', '#2D9CDB', '#00B4D8'],
      secundary: ['#EB5757'],
      background: ['#F2F2F2', '#A0A0A0', '#FCFCFC', '#F4F6FB'],
      text: ['#131313', '#F4F6FB', '#A0A0A0'],
      actions: {
        neutral: '#1890FF',
        success: '#6FCF97',
        warning: '#FADB14',
        error: '#EB5757',
      },
    },
  },
  light: {
    colors: {
      primary: ['#0077B6', '#2D9CDB', '#00B4D8'],
      secundary: ['#EB5757'],
      background: ['#F2F2F2', '#A0A0A0', '#FCFCFC', '#F4F6FB'],
      text: ['#131313', '#F4F6FB', '#A0A0A0'],
      actions: {
        neutral: '#1890FF',
        success: '#6FCF97',
        warning: '#FADB14',
        error: '#EB5757',
      },
    },
  },
}

export default (
  {
    dark: {
      ...darkLight.dark,
      ...genericDesign,
    },
    light: {
      ...darkLight.light,
      ...genericDesign,
    },
  }
)
