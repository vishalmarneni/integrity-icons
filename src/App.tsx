import { PlusIcon } from "../"

const sizes = [
  'xsm',
  'sm',
  'md',
  'xl',
  '2xl',
  '3xl'
]

const icons = [
  { icon: PlusIcon, name: 'Plus' }
]

function IconRender({Icon, name}: {Icon: React.FC<any>, name: string})  {
  const sizedIcons = sizes.map((size) => <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
    <Icon key={size} size={size} color={'#4178ff'} />
    <div>{size}</div>
  </div>)
  return <div style={{ display: 'flex', flexDirection: "column", gap: '10px' }}>
    <h3>{name}</h3>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '10px' }}>
      {sizedIcons}
    </div>
  </div>
}

function App() {

  return <>
    {
      icons.map(({icon: Icon, name}, idx) => <IconRender name={name} Icon={Icon} key={idx} />)
    }
  </>
}

export default App
