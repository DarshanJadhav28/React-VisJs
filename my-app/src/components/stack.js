import React, { useEffect, useRef } from "react";
import { Timeline } from "vis-timeline";

const VisTimeline = () => {
    var groups = new vis.DataSet([
        {id: 0, content: 'Box Group', value: 1},
        {id: 1, content: 'Box Point group', value: 3},
        {id: 2, content: 'point group', value: 2}
      ]);
    
      // create a dataset with items
      // note that months are zero-based in the JavaScript Date object, so month 3 is April
      var items = new vis.DataSet([
        {id: 0, group: 1, content: 'item 0', start: new Date(2014, 3, 17), end: new Date(2014, 3, 21) ,type:'point'},
        {id: 1, group: 0, content: 'item 1', start: new Date(2014, 3, 19), end: new Date(2014, 3, 20),type:'range'},
        {id: 2, group: 1, content: 'item 2', start: new Date(2014, 3, 16), end: new Date(2014, 3, 24)},
        {id: 3, group: 1, content: 'item 3', start: new Date(2014, 3, 23), end: new Date(2014, 3, 24)},
        {id: 4, group: 1, content: 'item 4', start: new Date(2014, 3, 22), end: new Date(2014, 3, 26),type:'point'},
        {id: 5, group: 2, content: 'item 5', start: new Date(2014, 3, 24), end: new Date(2014, 3, 27),type:'point'},
        {id: 6, group: 0, content: 'item 6', start: new Date(2014, 3, 24), end: new Date(2014, 3, 25) }
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
    
      var timeline = new vis.Timeline(container);
      timeline.setOptions(options);
      timeline.setGroups(groups);
      timeline.setItems(items);
    

}

export default VisTimeline;