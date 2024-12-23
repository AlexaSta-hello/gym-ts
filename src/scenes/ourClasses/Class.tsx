

type Props = {
    name: string;
    description?: string;
    image: string;
};

const Class = ({name, description, image}: Props) => {
  
  const overlayStyles = `p-5 absolute z-30 flex h-[338px] w-[450px] flex-col
    items-center justify-center whitespace-normal bg-gray-100 text-center
    text-white opacity-0 transition duration-500 hover:opacity-90`
    return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
            <p className="text-2xl mb-5">{name}</p>
            <p>{description}</p>
        </div>
        <img src={image} alt="yoga kurse" />
    </li>
  )
}

export default Class;