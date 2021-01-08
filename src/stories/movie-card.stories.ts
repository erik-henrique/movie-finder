import { MovieCardComponent } from '@components/movie-card/movie-card.component';
import { Meta, Story } from '@storybook/angular/types-6-0';

export default {
  title: 'MovieCard',
  component: MovieCardComponent,
} as Meta;

const Template: Story<MovieCardComponent> = (args: MovieCardComponent) => ({
  component: MovieCardComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  movie: {
    adult: false,
    backdrop_path: '/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg',
    genre_ids: [28, 878],
    id: 603,
    original_language: 'en',
    original_title: 'The Matrix',
    overview:
      'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
    popularity: 63.063,
    poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    release_date: '1999-03-30',
    title: 'The Matrix',
    video: false,
    vote_average: 8.1,
    vote_count: 18404,
  },
};
