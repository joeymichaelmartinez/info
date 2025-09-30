import './TextArt.css';

interface TextArtProps {
  label: string,
  text: string
}

const TextArt = ({label, text}: TextArtProps) => {
  return (
    <pre
      aria-label={label}
      className="text-art"
    >
      {text}
    </pre>
  )
}

export default TextArt;