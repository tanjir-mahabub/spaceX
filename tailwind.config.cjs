module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      
      // Define animation class
      animation: {
        'myspin': 'move 100s linear infinite',
      },
      // Define keyframes
      keyframes : {
        move: {
          '0%': {
            backgroundPositionX: '0px'
            
          },
          '100%': {
            backgroundPositionX: '200%'
          }
        }
      }
    }
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover']
  },
  plugins: [],
}
