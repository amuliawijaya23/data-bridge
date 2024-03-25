import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ForgotPassword from '@app/(authentication)/forgot-password/page';

afterEach(cleanup);

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('ForgotPassword', () => {
  it('renders without crashing', () => {
    render(<ForgotPassword />);
  });
});
