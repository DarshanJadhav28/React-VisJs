import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";


const VisNetwork = () => {

// eslint-disable-next-line no-undef
var groups = new vis.DataSet([
	{id: 0, content: 'First', value: 1},
	{id: 1, content: 'Third', value: 3},
	{id: 2, content: 'Second', value: 2}
  ]);

  // create a dataset with items
  // note that months are zero-based in the JavaScript Date object, so month 3 is April
  // eslint-disable-next-line no-undef
  var items = new vis.DataSet([
	{id: 0, group: 0, content: 'item 0', start: new Date(2014, 3, 17), end: new Date(2014, 3, 21)},
	{id: 1, group: 0, content: 'item 1', start: new Date(2014, 3, 19), end: new Date(2014, 3, 20)},
	{id: 2, group: 1, content: 'item 2', start: new Date(2014, 3, 16), end: new Date(2014, 3, 24)},
	{id: 3, group: 1, content: 'item 3', start: new Date(2014, 3, 23), end: new Date(2014, 3, 24)},
	{id: 4, group: 1, content: 'item 4', start: new Date(2014, 3, 22), end: new Date(2014, 3, 26)},
	{id: 5, group: 2, content: 'item 5', start: new Date(2014, 3, 24), end: new Date(2014, 3, 27)}
  ]);

  // create visualization
  var container = document.getElementById('visualization');
  var options = {
	// option groupOrder can be a property name or a sort function
	// the sort function must compare two groups and return a value
	//     > 0 when a > b
	//     < 0 when a < b
	//       0 when a == b
	groupOrder: function (a, b) {
	  return a.value - b.value;
	},
	editable: true
  };

  // eslint-disable-next-line no-undef
  var timeline = new vis.Timeline(container);
  timeline.setOptions(options);
  timeline.setGroups(groups);
  timeline.setItems(items);


	const visJsRef = useRef(null);
	useEffect(() => {
		const network =
			visJsRef.current &&
			new Network(visJsRef.current, { container, options,items,groups } );
		// Use `network` here to configure events, etc
	}, [visJsRef, container, options,items,groups]);

	return <div ref={visJsRef} />;
    

};

export default VisNetwork;