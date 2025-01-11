
export function AnimatedImage() {
  return (
    <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="blob">
                  <path fill="#FF0066" d="M47.5,-61.3C62.2,-53.9,75.2,-41.2,81.7,-25.2C88.2,-9.2,88.1,10,81.2,26.1C74.3,42.2,60.6,55.2,45.3,63.9C30,72.6,13.1,77,-3.6,81.5C-20.3,86,-40.6,90.6,-54.3,82.5C-68,74.4,-75,53.6,-79.4,33.5C-83.8,13.4,-85.5,-6,-79.7,-22.1C-73.9,-38.2,-60.6,-51,-46,-59.6C-31.3,-68.2,-15.7,-72.6,0.6,-73.4C16.8,-74.2,33.7,-71.4,47.5,-61.3Z" transform="translate(100 100)" />
                </clipPath>
              </defs>
              <image
                href="/ashutosh_image.jpg?height=400&width=400"
                width="200"
                height="200"
                clipPath="url(#blob)"
              />
            </svg>
          </div>
        </div>
  );
}
