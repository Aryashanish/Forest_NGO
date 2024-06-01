export default function Footer() {
  return (
    <div className="flex justify-between items-center p-4 px-8">
        <div className="">
            <img className="w-40" src="https://pngimg.com/d/tree_PNG92782.png" alt="not found" />
        </div>
        <div className="">
            <div className="flex gap-4 my-2">
                  <i className="bi bi-instagram cursor-pointer"></i>
                  <i className="bi bi-youtube cursor-pointer"></i>
                  <i className="bi bi-facebook cursor-pointer"></i>
                  <i className="bi bi-twitter-x cursor-pointer"></i>
                  <i className="bi bi-google cursor-pointer"></i>
            </div>      
            <p className="text-right">© 2024 CONSCIOUS PLANET ALL RIGHTS RESERVED</p>
            <p className="text-right">PRIVACY POLICY</p>
            <p className="text-right">TERMS & CONDITIONS</p>
        </div>  
    </div>
  )
}
