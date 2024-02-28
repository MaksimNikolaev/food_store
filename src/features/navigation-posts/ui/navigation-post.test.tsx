import { Provider } from 'react-redux';
import { render as rtlRender, screen } from '@testing-library/react';
import { NavigationPosts } from './navigation-posts';
import { ReactNode } from 'react';
import * as redux from '../../../app/store';

const data = {
  posts: [
    {
      id: 1,
      title: 'Title 1',
      tags: '#mystery, #classic, #french',
      reactions: 2,
      body: 'Content 1',
      userId: 1,
    },
    {
      id: 2,
      title: 'Title 2',
      tags: '#mystery, #classic, #french',
      reactions: 2,
      body: 'Content 2',
      userId: 2,
    },
  ],
  total: 150,
  skip: 2,
  limit: 2,
};

const render = (component: ReactNode) =>
  rtlRender(<Provider store={redux.store}>{component}</Provider>);

describe('NavigationPosts component', () => {
  it('disables previous button initially', () => {
    jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn());
    jest.spyOn(redux, 'useSelector').mockReturnValue({
      posts: { posts: data.posts },
    });
    render(<NavigationPosts />);
    const previousButton = screen.getByRole('button', {
      name: 'Previous posts',
    });
    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toBeDisabled();
  });

  it('enabled Next posts when there are more pages', async () => {
    jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn());
    jest.spyOn(redux, 'useSelector').mockReturnValue({
      posts: { posts: data.posts },
    });
    render(<NavigationPosts />);
    const nextButton = screen.getByRole('button', { name: 'Next posts' });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeEnabled();
  });

  it('If there is no data, the buttons are not displayed', async () => {
    jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn());
    jest.spyOn(redux, 'useSelector').mockReturnValue({
      posts: { posts: [] },
    });
    render(<NavigationPosts />);
    expect(screen.queryByRole('button', { name: 'Previous posts' })).toBeNull();
    expect(screen.queryByRole('button', { name: 'Next posts' })).toBeNull();
  });
});
