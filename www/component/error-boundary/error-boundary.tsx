import {Component, ReactNode} from 'react';

type PropsType = {
    children: ReactNode;
    errorFallBack: ReactNode;
};

type StateType = {
    hasError: boolean;
};

export class ErrorBoundary extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {hasError: false};
    }

    componentDidCatch(error: Error, errorInfo: unknown): void {
        console.log(`[ERROR]: ${error.message}`);
        console.log(`[ERROR-INFO]: ${String(errorInfo)}`);

        this.setState({hasError: true});
    }

    render(): ReactNode {
        const {state, props} = this;
        const {hasError} = state;
        const {children, errorFallBack} = props;

        return hasError ? errorFallBack : children;
    }
}
