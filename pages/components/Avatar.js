export default function Avatar({ url, className }) {
  return (
    <div>
      <img
        className={`h-10 max-w-full cursor-pointer  rounded-full transition duration-150 hover:scale-110 ${className}`}
        src={url}
        loading="lazy"
        alt="profile pic"
      />
    </div>
  )
}
