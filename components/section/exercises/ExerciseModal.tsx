"use client";
import TextInput from "@/components/elements/form-elements/text-input/TextInput";
import Modal from "@/components/elements/modal/Modal";
import { Title } from "@/components/elements/Title/Title";
import {
  ExcerciseCategoryEnum,
  ModalityEnum,
  MovementPatternEnum,
  MuscleGroupEnum,
  TrackingFieldEnum,
} from "../../../types/api";

import React, { useState } from "react";
import SelectInput, {
  Option,
} from "@/components/elements/form-elements/select-input/SelectInput";
import CustomSelect from "@/components/elements/form-elements/custom-select/CustomSelect";
import {
  faDumbbell,
  faInfoCircle,
  faPlus,
  faQuestionCircle,
} from "@fortawesome/pro-solid-svg-icons";
import { faLink } from "@fortawesome/pro-thin-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomToolTip from "@/components/elements/custom-tooltip/CustomToolTip";
import TrackFieldOption from "./TrackFieldOption";

const maxTrackingFields = 3;

const ExerciseModal = () => {
  const modalityOptions = Object.entries(ModalityEnum).map(
    ([label, value]) => ({
      label,
      value,
    })
  );
  const [selectedTrackingFields, setSelectedTrackingFields] = useState<
    Option[]
  >([]);

  const [showSelectTrackingField, setShowSelectTrackingField] = useState(false);
  const [showAddLink, setShowAddLink] = useState(false);
  const muscleGroupOptions = Object.entries(MuscleGroupEnum).map(
    ([label, value]) => ({ label, value })
  );

  const movementPattern = Object.entries(MovementPatternEnum).map(
    ([label, value]) => ({ label, value })
  );
  const categories = Object.entries(ExcerciseCategoryEnum).map(
    ([label, value]) => ({ label, value })
  );

  const trackingOptions = Object.entries(TrackingFieldEnum).map(
    ([label, value]) => ({ label, value })
  );
  const [availableTrackingOptions, setAvailableTrackingOptions] =
    useState<Array<Option>>(trackingOptions);
  const toggleSelectTrackingField = () => {
    setShowSelectTrackingField((prev) => !prev);
  };

  const handleSelectTrackingField = (option: Option) => {
    if (selectedTrackingFields.length >= maxTrackingFields) {
      return;
    }
    setSelectedTrackingFields((prev) => [...prev, option]);
    setAvailableTrackingOptions((prev) =>
      prev.filter((field) => field !== option)
    );
  };

  const handleRemoveTrackingField = (option: Option) => {
    setSelectedTrackingFields((prev) =>
      prev.filter((field) => field !== option)
    );
    setAvailableTrackingOptions((prev) => [...prev, option]);
  };

  return (
    <div>
      <Modal className="md:w-[60%] bg-white relative">
        <div className="grid grid-cols-2">
          <div className="overflow-y-auto h-full">
            <Title size="lg">Add new Exercise</Title>
            <div className="mt-6">
              <TextInput placeholder="Name of your exercise" />
              <div className="mt-4">
                <span className=" text-xs text-gray-500 uppercase mb-1">
                  Primary Focus
                </span>
                <div className="flex flex-col gap-y-2">
                  <CustomSelect preText="Modality:" options={modalityOptions} />
                  <CustomSelect
                    maxOptions={3}
                    preText="Muscle group:"
                    isMulti
                    bubleList
                    options={muscleGroupOptions}
                  />
                  <CustomSelect
                    preText="Movement pattern:"
                    isMulti
                    bubleList
                    displayValue
                    maxOptions={3}
                    options={movementPattern}
                  />
                </div>
                <div className="mt-4">
                  <span className=" text-xs text-gray-500 uppercase mb-1">
                    Category
                  </span>
                  <div className=" bg-[#F6F7FB] p-3 rounded-md">
                    <CustomSelect
                      preText="Category
                      :"
                      options={categories}
                    />
                    <div className="mt-4">
                      <div className="flex items-center gap-1">
                        <CustomToolTip
                          id="tracking"
                          place="top"
                          variant="info"
                          className="max-w-[18rem] "
                          content="
                         Choose up to 3 tracking fields for this exercise. These fields will be displayed on the exercise page and can be used to track progress."
                        />
                        <span className="text-[0.7em] text-gray-400">
                          TRACKING FIELDS
                        </span>
                        <FontAwesomeIcon
                          data-tooltip-id="tracking"
                          className="text-gray-300 text-[0.9em]"
                          icon={faQuestionCircle}
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-2 pt-1">
                          {
                            // Display selected tracking fields
                            selectedTrackingFields.map((field) => (
                              <TrackFieldOption
                                handleRemoveTrackingField={
                                  handleRemoveTrackingField
                                }
                                key={field.value}
                                option={field}
                              />
                            ))
                          }
                        </div>
                        {selectedTrackingFields.length < maxTrackingFields && (
                          <div className="relative w-[5rem] flex justify-end">
                            <button
                              onClick={toggleSelectTrackingField}
                              className="bg-white border border-gray-300 flex text-gray-600 justify-center items-center px-6 py-2 rounded-md "
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                            {showSelectTrackingField && (
                              <div
                                style={{
                                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
                                }}
                                className="absolute  top-full left-0 w-full z-10 flex flex-col max-h-[10rem] overflow-y-auto gap-y-2 bg-white rounded-md mt-1 flex-grow "
                              >
                                {availableTrackingOptions.map((option) => {
                                  return (
                                    <div
                                      onClick={() => {
                                        handleSelectTrackingField(option);
                                        setShowSelectTrackingField(false);
                                      }}
                                      key={option.value}
                                      className="bg-white  text-xs px-2  py-1 flex items-center gap-1 w-full cursor-pointer hover:bg-pastel-blue"
                                    >
                                      <span>{option.label}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <span className="text-[0.7em] text-gray-400">
                  INSTRUCTIONS (Separate each step on a new line)
                </span>
                <TextInput placeholder="Add exercise instructions" />
              </div>
              <div className="mt-6">
                <div className="flex gap-1 items-center mb-2">
                  <div className="rounded-full h-6 w-6 flex items-center justify-center bg-gray-200 text-gray-500">
                    <FontAwesomeIcon icon={faLink} size="xs" />
                  </div>

                  <span
                    onClick={() => setShowAddLink((prev) => !prev)}
                    className="text-[0.7em] text-gray-400 uppercase"
                  >
                    {!showAddLink ? "Add link" : "delete link"}
                  </span>
                </div>
                {showAddLink && <TextInput placeholder="Add Link" />}
              </div>
            </div>
          </div>
          <div>dd</div>
        </div>
      </Modal>
    </div>
  );
};

export default ExerciseModal;
