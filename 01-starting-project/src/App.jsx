import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './component/Header/Header.jsx';
import CoreConcept from './component/CoreConcepts.jsx';
import TabButton from './component/TabButton.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState(null);

  const handleSelect = (selectedButton) => {
      setSelectedTopic(selectedButton)
      console.log(selectedTopic);
  };

  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic){
    tabContent = 
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic === 'components'} 
            onSelect={()=> handleSelect('components')}>
              Components
              </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'jsx'} 
            onSelect={()=> handleSelect('jsx')}>
              JSX
              </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'props'}
            onSelect={()=> handleSelect('props')}>
              Props
              </TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
             onSelect={()=> handleSelect('state')}>
              State
              </TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
