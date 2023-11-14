/**
 * Link Panel Component
 *
 * @author agrattan
 * @author Steven-Jarmell
 */

import LinkPanelItem from "./LinkPanelItem"
import { LinkPanelItemList } from "./LinkPanelItemList"

const LinkPanel = () => {
  return (
    <div className="my-12 flex flex-col items-center flex-wrap md:flex-row justify-center">
      {LinkPanelItemList.map((item) => (
        <LinkPanelItem
          path={item.path}
          icon={item.icon}
          iconAlt={item.iconAlt}
          description={item.description}
          title={item.title}
        />
      ))}
    </div>
  )
}

export default LinkPanel
