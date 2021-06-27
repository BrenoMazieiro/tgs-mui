import Providers from '../src/Providers'

export const decorators = [
  (Story) => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
      <Providers >
        <Story />
      </Providers>
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },  
}