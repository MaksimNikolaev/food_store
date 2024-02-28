import { ReactNode } from 'react';
import {
  fireEvent,
  render as rtlRender,
  screen,
  waitFor,
} from '@testing-library/react';
import * as redux from '../../../app/store';
import { Posts } from './posts';
import { Provider } from 'react-redux';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

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

describe('Posts component', () => {
  it('load posts', async () => {
    jest.spyOn(redux, 'useSelector').mockReturnValue({
      posts: { posts: data.posts, postsLoading: false },
    });
    render(<Posts />);
    expect(screen.getByText('Title 1')).toBeInTheDocument();
  });

  it('Checking for an empty array', async () => {
    jest.spyOn(redux, 'useSelector').mockReturnValue({
      posts: { posts: [], postsLoading: false },
    });
    render(<Posts />);
    expect(screen.getByText('Posts are not available')).toBeInTheDocument();
  });

  it('navigates to post details when a post is clicked', async () => {
    jest.spyOn(redux, 'useSelector').mockReturnValue({
      posts: { posts: data.posts, postsLoading: false },
    });
    render(<Posts />);
    fireEvent.click(screen.getByText('Title 1'));

    await waitFor(() => {
      expect(mockUsedNavigate).toHaveBeenCalledWith('/blog/post/1');
    });
  });
});
