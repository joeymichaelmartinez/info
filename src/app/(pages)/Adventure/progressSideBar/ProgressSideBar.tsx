import { ExperienceProgressItems } from "../page"


interface ProgressSideBarProps {
  experienceProgressItems: ExperienceProgressItems[]
}

export default function ProgressSideBar({experienceProgressItems}: ProgressSideBarProps) {

  return (
    <div style={{backgroundColor: '#b33', width: 300, minWidth: 150}}>
      {experienceProgressItems.map((experienceProgressItem) => <div key={experienceProgressItem.text} style={{fontSize: '30px'}}>{experienceProgressItem.text} {experienceProgressItem.count}</div>)}
    </div>
  )
}