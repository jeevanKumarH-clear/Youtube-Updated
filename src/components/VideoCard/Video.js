import React from 'react';

const Video = (context) => {
	const { state: { selectedId }} = context;

	return (
		<div className="videoContainer">
			<video
				className="video"
				src={ selectedId }
				autoPlay={ true }
				controls={ true }
			/>
		</div>);
};

export default Video;
