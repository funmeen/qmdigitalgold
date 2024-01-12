export default function GSAPage({ onBackClick }) {
    return (
      <div className='p-4'>
        <div className='flex flex-wrap'>
          <div className='p-4 w-full md:w-1/3 md:order-2 '>
            <div className='p-7 border rounded-md bg-yellow-300'>
              <p>GOLD STORAGE ACCOUNT</p>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker 
                including versions of Lorem Ipsum.</p>
            </div>
          </div>
        
          <div className='p-4 w-full md:w-2/3 md:order-1'>
            <div className='p-4 border rounded-md bg-yellow-300'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker 
                including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
  
        
        <button onClick={onBackClick} className='bg-yellow-300 p-4'>Back to Home</button>
      </div>
    );
  }