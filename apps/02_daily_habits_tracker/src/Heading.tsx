interface Props {
  title: string;
  subtitle: string;
}

// TODO: move this to common package
export default function Heading({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-text-main text-3xl pb-1">{title}</h1>
      <p className="text-text-secondary">{subtitle}</p>
    </div>
  );
}
