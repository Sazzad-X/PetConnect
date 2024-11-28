"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { filterData } from "@/constant";
import { useState } from "react";
const Filter = () => {
    const [priceRange, setPriceRange] = useState([0, 10000]);
    return (
        <div>
        <h1 className="font-semibold mb-6 text-xl">Filter</h1>
        <Input placeholder="Search Pets..." />
        <div className="space-y-2 mt-4">
          <label className="text-sm font-medium">Price Range</label>
          <div>
            <Slider
              min={0}
              max={10000}
              step={100}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <div className="flex items-center justify-between text-slate-400 mt-2">
              <span>{priceRange[0] || 0}</span>
              <span>{priceRange[1] || 10000}</span>
            </div>
          </div>
        </div>
        <div className="space-y-3 ">
          {filterData.map((item, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              defaultValue={`item-${index + 1}`}
              className="w-full"
            >
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <RadioGroup>
                    {item.options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2 py-2"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="w-4 h-4"
                        />
                        <Label
                          htmlFor={option.value}
                          className="text-sm font-medium"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    );
}

export default Filter;