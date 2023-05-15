import React,{useState,useEffect} from "react";

const Home = () => {
  const[siteName, setSiteName] = useState('guddi.com/')
  const[link, setLink] = useState('');
  const[hash, setHash] = useState('');
  const[list, setList] = useState([{  }])
  const[flag,setFlag] = useState(false)

  const generateHash = async() => {
    
    const response = await fetch('https://random-word-api.herokuapp.com/word?lang=en&length=6')
    const responseText = await response.json();
    setHash(siteName + responseText)
    setFlag(true)
  }
  
  
    // fetch('https://random-word-api.herokuapp.com/word?lang=en&length=6')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("hash is set")
    //         setHash(site_name + data);

    //       });
  // }
  useEffect(() => {
    if (flag){
      setList((prv) => [...prv,{link:link,hash_val:hash}]);
    }
    },[hash])
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-400">
              Guddi
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-green-400">
              Shorten your Link with Guddi.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-green-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange = {(e) => setLink(e.target.value)}
                    className="w-full rounded border border-gray-300 focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-white"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={generateHash}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Shorten
                </button>
              </div>
              <p className= 'text-green-400'>Your New Link is : {hash}</p>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href='mailto:nupur6196.patel@email.com' className="text-indigo-500" target = '_blank'>
                nupur6196.patel@email.com
                </a>
                <p className="leading-normal my-5">
                  Brampton, ON, CA.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
