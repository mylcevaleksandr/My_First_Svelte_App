var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/mylcevaleksandr/My_First_Svelte_App.git', // Update to point to your repository  
        user: {
            name: 'Aleksandr Myltsev', // update to use your name
            email: 'myltsevaleksandr@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)