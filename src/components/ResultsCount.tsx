import { useJobItemsContext } from "../lib/hooks";

export default function ResultsCount() {
  const { totalNumberOfResults } = useJobItemsContext();
  return (
    <p className="count">
      <span>{totalNumberOfResults}</span>
    </p>
  );
}
