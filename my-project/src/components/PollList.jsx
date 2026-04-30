import PollOption from "./PollOption";

function PollList({ options, vote, hasVoted }) {
	if (!options || options.length === 0) {
		return <p className="text-center text-gray-600">No candidates yet.</p>;
	}

	return (
		<ul className="space-y-3">
			{options.map((option) => (
				<PollOption
					key={option.id}
					option={option}
					vote={vote}
					hasVoted={hasVoted}
				/>
			))}
		</ul>
	);
}

export default PollList;