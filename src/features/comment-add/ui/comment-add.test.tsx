import { render as rtlRender, fireEvent, waitFor, screen } from '@testing-library/react';
import { CommentAdd } from './comment-add';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { ReactNode } from 'react';

const render = (component: ReactNode) =>
  rtlRender(
    <Provider store={store}>
      {component}
    </Provider>
  );

describe('CommentAdd component', () => {
  it('renders correctly', () => {
    render(<CommentAdd />);
    
    expect(screen.getByText('Add')).toBeInTheDocument();
    expect(screen.getByText('comment')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your comment')).toBeInTheDocument();
    expect(screen.getByText('Send')).toBeInTheDocument();
  });

  it('submits comment when Enter key is pressed', async () => {
    render(<CommentAdd />);

    const textarea = screen.getByPlaceholderText('Enter your comment');    

    fireEvent.change(textarea, { target: { value: 'New comment' } });
    fireEvent.keyDown(textarea, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      expect(screen.getByText('New comment')).toBeInTheDocument();
    });
  });

  it('add comment by button', async () => {
    render(<CommentAdd />);
  
    const textarea = screen.getByPlaceholderText('Enter your comment');
    fireEvent.change(textarea, { target: { value: 'New comment' } });
  
    const sendButton = screen.getByText('Send');
    fireEvent.click(sendButton);
  
    await waitFor(() => {
      expect(screen.getByText('New comment')).toBeInTheDocument();
    });
  });  
});

