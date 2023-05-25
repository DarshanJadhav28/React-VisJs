import React, {Component} from 'React';
import vis from 'vis';

const Dot = () => {

    
var options = {
    stack: {
      // Enable dot stacking
      type: 'dot',
      // Configure the size and color of the dots
      dot: {
        size: 5,
        color: 'rgba(255, 255, 255, 0.7)',
        border: '2px solid black'
      }
    },
    // Other timeline options...
  };
  
  var container = document.getElementById('visualization');
  var items = [
    { id: 1, content: 'Event 1', start: '2023-04-12T09:00:00', end: '2023-04-12T12:00:00' ,type:'point'},
    { id: 2, content: 'Event 2', start: '2023-04-12T10:00:00', end: '2023-04-12T11:00:00' ,type:'point'},
    { id: 3, content: 'Event 3', start: '2023-04-12T11:00:00', end: '2023-04-12T13:00:00' ,type:'point'},
    { id: 4, content: 'Event 4', start: '2023-04-12T13:00:00', end: '2023-04-12T14:00:00' ,type:'point'},
    { id: 5, content: 'Event 5', start: '2023-04-12T14:00:00', end: '2023-04-12T16:00:00' ,type:'point'},
    { id: 6, content: 'Event 6', start: '2023-04-12T10:00:00', end: '2023-04-12T11:00:00' ,type:'point'},
    { id: 7, content: 'Event 7', start: '2023-04-12T13:00:00', end: '2023-04-12T13:00:00' ,type:'point'}
  ];
  var timeline = new vis.Timeline(container, items, options);
  
      function toggleStacking() {
          options.stack = !options.stack;
          stackingStatus.innerHTML = options.stack.toString();
          timeline.setOptions(options);
      }
  
return(
  <>
  <table>
        <thead>
            <tr>
                <th>Option</th>
                <th>Status</th>
                <th>Toggle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Stacking</td>
                <td id="stackingStatus">true</td>
                <td><button onclick={toggleStacking()}>Toggle</button></td>
            </tr>
        </tbody>
    </table>
    

  <div id="visualization" style={{position: "relative"}}></div>
  </>
)

}
export default Dot;