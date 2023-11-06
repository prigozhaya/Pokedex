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
    this.reloadPage = this.reloadPage.bind(this);
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

  reloadPage() {
    location.reload();
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="ErrorContainer">
            <p className="ErrorMsg">
              Ooops, something went wrong! Ask pikachu for help
            </p>
            <img
              src="https://detectivepikachu.pokemon.com/_images/characters/pikachu-intro.png"
              alt="oopsImg"
              className="oopsImg"
              onClick={this.reloadPage}
            />
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
