// just example module/component

type PropsType = {
    // eslint-disable-next-line react/no-unused-prop-types
    smth: string;
};

// eslint-disable-next-line import/no-default-export, no-unused-vars, @typescript-eslint/no-unused-vars
export default function LoadMeAsync(props: PropsType): JSX.Element {
    const {smth} = props;

    return <h4>I Loaded Async smth === {smth}</h4>;
}
