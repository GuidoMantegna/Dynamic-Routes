import React from 'react';

type Props = {
    error: {message: string} | null;
}
const PageError: React.FC<Props> = ({ error }) => {
    return (
        <div>
          <p>Something went wrong:</p>
          <pre>{error?.message}</pre>
        </div>
    );
};

export default PageError;