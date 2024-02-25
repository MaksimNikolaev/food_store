import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { CommentAdd } from './comment-add';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

it('add comment', async () => {
  render(
    <Provider store={store}>
      <CommentAdd />
    </Provider>
  );

  const textarea = screen.getByPlaceholderText('Enter your comment');
  fireEvent.change(textarea, { target: { value: 'New comment' } });

  const sendButton = screen.getByText('Send');
  fireEvent.click(sendButton);

  await waitFor(() => {
    expect(screen.getByText('New comment')).toBeInTheDocument();
  });
});
