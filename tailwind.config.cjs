module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      
      // Define animation class
      animation: {
        'mapspin': 'move 100s linear infinite',
        'flicker': 'flicker 3ms 200ms ease-in infinite alternate',
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
        },

        flicker: {
          '0%': {
         transform: 'rotate(-1deg)'
         },
          '20%': {
         transform: 'rotate(1deg)'
         },
          '40%': {
         transform: 'rotate(-1deg)'
         },
          '60%': {
         transform: 'rotate(1deg) scaleY(1.04)'
         },
          '80%': {
         transform: 'rotate(-2deg) scaleY(0.92)'
         },
          '100%': {
            transform: 'rotate(1deg)'
            }
         }
         
      },
      
    }
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover']
  },
  plugins: [],
}
