import {writable} from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: '1',
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.'
    },
    {
        id: '2',
        rating: 9,
        text: 'Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil.'
    },
    {
        id: '3',
        rating: 8,
        text: 'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?'
    }
])