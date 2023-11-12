import React, { ReactNode } from 'react';
import './styles.css';
import { ErrorState } from '../types/types';

interface Props {
  children?: ReactNode;
}

export default class ErrorBoundary extends React.Component<Props, ErrorState> {
  constructor(props: Props) {
    super(props);
    this.callingError = this.callingError.bind(this);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  callingError() {
    this.setState({
      hasError: true,
    });
    if (this.state.hasError) {
      throw Error('Error');
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="ErrorContainer">
            <div>
              <h1 className="ErrorTitle">Gotcha!</h1>
              <p className="ErrorMsg">
                Something went wrong! Ask pikachu for help.
              </p>
            </div>
            <a href="/">
              <img
                src="/src/assets/pikachu-error.png"
                alt="oopsImg"
                className="oopsImg"
              />
            </a>
          </div>
        </>
      );
    }
    return (
      <>
        {this.props.children}
        <button onClick={this.callingError} className="errorBtn">
          Error Button
        </button>
      </>
    );
  }
}
