import {render, screen} from '@testing-library/react'
import { GiphItem } from "../../src/components/GiphItem"

describe('Testing <GiphItem />', () => {

  const title = 'BernatQi';
  const url = 'https://bernatqi.dev/';

  test('Should match with snapshot', () => {
    const {container} = render(<GiphItem title={title} url={url} />);
    
    expect(container).toMatchSnapshot();
  });
  
  test('Shuld show proper image\´s url & alt', () => {
    render(<GiphItem title={title} url={url} />);
    //screen.debug();

    //expect(screen.getByRole('img').src).toBe(url);
    //expect(screen.getByRole('img').alt).toBe(title);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Sholod show title in component', () => {
    render(<GiphItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
})