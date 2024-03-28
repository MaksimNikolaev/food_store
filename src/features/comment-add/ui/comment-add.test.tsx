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
    //Проверяем элементы на странице
    expect(screen.getByText('Add')).toBeInTheDocument();
    expect(screen.getByText('comment')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your comment')).toBeInTheDocument();
    expect(screen.getByText('Send')).toBeInTheDocument();
  });

  it('submits comment when Enter key is pressed', async () => {
    render(<CommentAdd />);
    //Находим поле для ввода и вводим "New comment"
    const textarea = screen.getByPlaceholderText('Enter your comment');
    fireEvent.change(textarea, { target: { value: 'New comment' } });
    //Нажимаем клавишу Enter
    fireEvent.keyDown(textarea, { key: 'Enter', code: 'Enter' });
    //Проверяем что добавленный комментарий 'New comment' отображается
    await waitFor(() => {
      expect(screen.getByText('New comment')).toBeInTheDocument();
    });
  });

  it('add comment by button', async () => {
    render(<CommentAdd />);
    //Находим поле для ввода и вводим "New comment"
    const textarea = screen.getByPlaceholderText('Enter your comment');
    fireEvent.change(textarea, { target: { value: 'New comment' } });
    //Находим кнопку Отправить и совершаем нажатие
    const sendButton = screen.getByText('Send');
    fireEvent.click(sendButton);
    //Проверяем что добавленный комментарий 'New comment' отображается
    await waitFor(() => {
      expect(screen.getByText('New comment')).toBeInTheDocument();
    });
  });

  it('enables the button when the comment field is filled', () => {
    render(<CommentAdd />);
    const commentInput =screen.getByPlaceholderText('Enter your comment');
    const sendButton = screen.getByText('Send');
    // Проверяем, что кнопка изначально отключена
    expect(sendButton).toBeDisabled();
    // Заполняем поле комментария
    fireEvent.change(commentInput, { target: { value: 'Test comment' } });
    // Проверяем, что кнопка стала активной
    expect(sendButton).toBeEnabled();
  });
});

