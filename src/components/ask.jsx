
export function Ask({asks, activerRadio}) {  
  return (
    <div className='flex flex-col gap-10'>
      {asks.map((ask) => (
        <div key={ask.id} id={ask.id}>
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            {ask.content}
          </h3>
          <ul className="grid w-full gap-6 md:grid-cols-2">
            {ask.answers.map((answer) => (
              <li key={answer.id}>
                <input 
                  type="radio" 
                  id={`ask-${ask.id}-option-${answer.id}`} 
                  name={`ask-${ask.id}`} 
                  value={answer.id} 
                  onClick={activerRadio}
                  className="hidden peer"
                />
                <label 
                  htmlFor={`ask-${ask.id}-option-${answer.id}`} 
                  className="inline-flex items-center justify-between w-full p-5 text-white italic bg-blue-950/40 border-blue-950/10 rounded-lg border-2 cursor-pointer peer-checked:border-amber-600 peer-checked:text-amber-500"
                >
                  <div className="block">
                    <h1>{answer.option}</h1>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}