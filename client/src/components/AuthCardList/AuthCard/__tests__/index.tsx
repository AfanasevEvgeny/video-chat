import { render, screen } from '../../../../../testUtils';
import { AuthCard } from '../../AuthCard';
describe('rendering Auth Card', () => {
  test('check text', () => {
    render(
      <AuthCard
        title={'title'}
        description={'Deacription'}
        rightImageSrc={'null'}
      />
    );
    expect(screen.getByText('title')).toBeTruthy();
  });
});
