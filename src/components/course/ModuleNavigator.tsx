// components/course/ModuleNavigator.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiCheckCircle, FiMenu, FiTarget, FiX } from "react-icons/fi";

interface Module {
  title: string;
  outcome?: string;
  contentType?: string;
}

interface ModuleNavigatorProps {
  modules: Module[];
  activeModule: number;
  completedModules: Set<number>;
  activeTab: "lesson" | "quiz";
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  onSelectModule: (index: number) => void;
  onSetTab: (tab: "lesson" | "quiz") => void;
  onToggleComplete: (index: number) => void;
}

export default function ModuleNavigator({
  modules,
  activeModule,
  completedModules,
  activeTab,
  sidebarOpen,
  onToggleSidebar,
  onSelectModule,
  onSetTab,
  onToggleComplete,
}: ModuleNavigatorProps) {
  const progressPercentage = Math.round(
    (completedModules.size / modules.length) * 100
  );

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.div
          initial={{ x: -320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -320, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-80 bg-white border-r border-gray-200 flex flex-col shadow-sm"
        >
          {/* Header with Toggle Button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">Your Progress</h3>
            <button
              onClick={onToggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <FiX className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Progress Summary */}
          <div className="p-4">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-4 rounded-xl">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Completed</span>
                <span className="font-medium text-gray-900">
                  {completedModules.size} of {modules.length} modules
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Module List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {modules.map((module, index) => {
              const isActive = index === activeModule;
              const isCompleted = completedModules.has(index);

              return (
                <div key={index} className="space-y-1">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      onSelectModule(index);
                      onSetTab("lesson");
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-emerald-50 border-2 border-emerald-200 shadow-sm"
                        : "hover:bg-gray-50 border-2 border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                          isCompleted
                            ? "bg-emerald-100 text-emerald-600"
                            : isActive
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {isCompleted ? (
                          <FiCheck className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm leading-tight">
                          {module.title}
                        </h4>
                        {/* <p className="text-xs text-gray-500 mt-1">
                                  {module.contentType}
                                </p> */}
                        {module.outcome && (
                          <div className="flex items-center gap-1 mt-1">
                            <FiTarget className="w-3 h-3 text-gray-400" />
                            <p className="text-xs text-gray-400 truncate">
                              {module.outcome}
                            </p>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleComplete(index);
                        }}
                        className={`p-1 rounded-full transition-colors ${
                          isCompleted
                            ? "text-emerald-600 hover:bg-emerald-100"
                            : "text-gray-400 hover:bg-gray-100"
                        }`}
                      >
                        <FiCheckCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>

                  {/* Quiz Shortcut */}
                  {isActive && module.contentType === "quiz" && (
                    <motion.button
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      onClick={() => onSetTab("quiz")}
                      className={`ml-4 w-full text-left p-3 rounded-lg text-sm transition-all ${
                        activeTab === "quiz"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "text-gray-600 hover:bg-gray-50 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <FiCheckCircle className="w-4 h-4" />
                        <span>Module Quiz</span>
                      </div>
                    </motion.button>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
