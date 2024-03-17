import ReactMarkdown from 'react-markdown';


export default function Markdown(props: { markdown?: string }) {

    const defaultMarkdown = '... Loading';

    return <ReactMarkdown>
        {props.markdown || defaultMarkdown}
    </ReactMarkdown>
}
