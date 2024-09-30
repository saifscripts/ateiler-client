import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
  Button,
} from 'keep-react';
import { CaretDown, SlidersHorizontal } from 'phosphor-react';
import { PiFunnelX } from 'react-icons/pi';
import { useSearchParams } from 'react-router-dom';
import BrandFilter from './BrandFilter';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';

export default function CollapsibleFilters() {
  const [, setParams] = useSearchParams();

  return (
    <Accordion className="block 2xl:hidden bg-white rounded-lg border-none">
      <AccordionPanel className="bg-white rounded-lg border-none">
        <AccordionContainer className="px-2 py-4">
          <AccordionTitle className="flex items-center gap-2">
            <SlidersHorizontal size={19} color="#AFBACA" />
            Filters
          </AccordionTitle>
          <AccordionIcon>
            <CaretDown size={19} color="#AFBACA" />
          </AccordionIcon>
        </AccordionContainer>
        <AccordionContent className="p-2">
          <div className="bg-white rounded-lg space-y-2">
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1">
              <CategoryFilter />
              <BrandFilter />
            </div>

            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1">
              <PriceFilter />
              <RatingFilter />
            </div>

            <div className="flex justify-end">
              <Button
                className="gap-2"
                color="secondary"
                size="sm"
                variant="link"
                onClick={() => setParams({}, { replace: true })}
              >
                <PiFunnelX size={19} />
                Clear Filter
              </Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}
