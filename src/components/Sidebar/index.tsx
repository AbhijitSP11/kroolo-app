"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Home, Inbox, ListTodo, MessageCircle,
  Clock, Target, FileText, Users, Calendar, Layers, MessageCircleMore,
  Sparkles, MessagesSquare, Plus, ChevronLeft
} from 'lucide-react';
import Tags from '../ui/Tags';
import Upgrade from '../ui/Upgrade';

type MenuOption = {
  icon: React.ElementType;
  subIcon?: React.ElementType;
  name: string;
  count?: number;
  soon?: boolean;
  subOptions?: MenuOption[];
};

const menuOptions: MenuOption[] = [
  { icon: Inbox, name: "Inbox" },
  { icon: MessageCircleMore, name: "Direct Messages" },
  { icon: ListTodo, name: "My Tasks" },
  { icon: Sparkles, name: "AI Agents" },
  { icon: MessageCircle, name: "Chat with Anything" },
  { icon: Clock, name: "Track Time" },
];

const bottomOptions: MenuOption[] = [
  { icon: Layers, subIcon: ChevronRight, name: "Projects", count: 1 },
  { icon: Target, subIcon: ChevronRight, name: "Goals", subOptions: [
    { subIcon: ChevronRight, icon: Plus, name: "Create Goal" }
  ]},
  { icon: FileText, subIcon: ChevronRight, name: "Docs", subOptions: [
    { subIcon: ChevronRight, icon: Plus, name: "Create" }
  ]},
  { icon: MessagesSquare, subIcon: ChevronRight, name: "Channels", subOptions: [
    { subIcon: ChevronRight, icon: Plus, name: "Create Channel" }
  ]},
  { icon: Users, subIcon: ChevronRight, name: "Teams", subOptions: [
    { subIcon: ChevronRight, icon: Plus, name: "Create Team" }
  ]},
  { icon: Calendar, subIcon: ChevronRight, name: "Meetings", soon: true },
];

const Sidebar = () => {
  const [expandedOption, setExpandedOption] = useState<string | null>(null);
  const [collapseSidebar, setCollapseSidebar] = useState<boolean>(false);

  const handleOptionClick = (option: MenuOption) => {
    if (option.subOptions) {
      setExpandedOption(option.name === expandedOption ? null : option.name);
    }
  };


  return (
    <div className={`${collapseSidebar ? 'w-4' : 'w-[20rem]'}  h-screen bg-white border-r border-gray-200 flex flex-col`}>
      {/* Workspace Header */}
      <div className='flex items-center justify-between w-full'>
        <div className="p-2 m-2 hover:bg-gray-100 cursor-pointer rounded-md w-[94%]">
          <p className="text-[0.9rem] font-[580] text-gray-600 mb-1">Workspace</p>
          <div className="flex justify-between items-center">
            <span className="flex gap-2 items-center">
              <Home className="h-5 w-5 text-rose-500"/>
              <p className="font-medium">Kroolo Space</p>
            </span>
            <ChevronDown className="h-5 w-5 text-gray-500"/>
          </div>
        </div> 
        <div className='justify-end w-[6%]'>
          <ChevronLeft className='h-5 w-5' onClick={() => setCollapseSidebar(!collapseSidebar)}/>
        </div>
      </div>
      

      {/* Main Menu Options */}
      <div className="px-4 border-t mt-[-4px]">
        {menuOptions.map((option) => (
          <div
            key={option.name}
            className="flex items-center  justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
            onClick={() => handleOptionClick(option)}
          >
            <span className="flex items-center gap-2">
              <option.icon className="h-5 w-5 text-gray-600" />
              <span className="text-base">{option.name}</span>
            </span>
            {option.subOptions && option.subIcon && (
              <option.subIcon className="h-5 w-5 ml-1 text-gray-500 group-hover:block hidden" />
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-2 border-t border-gray-200" />

      {/* Bottom Options */}
      <div className="px-4">
        {bottomOptions.map((option) => (
          <div key={option.name}>
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer group"
              onClick={() => handleOptionClick(option)}
            >
              <span className="flex items-center gap-2">
                <option.icon className="h-5 w-5 text-gray-600 group-hover:hidden" />
                {option.subIcon && <option.subIcon className="h-5 w-5 ml-1 text-gray-500 group-hover:block hidden" />}
                <span className="text-base">{option.name}</span>
              </span>
              {option.count && (
                <span className="text-xs text-gray-500">{option.count}</span>
              )}
              {option.soon && (
                <Tags/>
              )}
            </div>
            {expandedOption === option.name && (
              <div className="pl-8">
                {option.subOptions?.map((subOption) => (
                  <div
                    key={subOption.name}
                    className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <subOption.icon className="h-5 w-5 text-gray-600" />
                      <span className="text-sm">{subOption.name}</span>
                    </span>
                    {subOption.subIcon && <subOption.subIcon className="h-4 w-4 ml-1 text-gray-500" />}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Upgrade/>
     
    </div>
  );
};

export default Sidebar;