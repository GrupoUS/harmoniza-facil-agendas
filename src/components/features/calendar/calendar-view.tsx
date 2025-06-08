"use client";

import { Calendar, momentLocalizer, View } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";
import { useState, useMemo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

// Configure moment for Portuguese
moment.locale("pt-br");
const localizer = momentLocalizer(moment);

interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resource?: {
    patient: string;
    procedure: string;
    status: "confirmed" | "pending" | "cancelled";
    phone?: string;
  };
}

interface CalendarViewProps {
  events?: Event[];
  onSelectEvent?: (event: Event) => void;
  onSelectSlot?: (slotInfo: { start: Date; end: Date }) => void;
}

export function CalendarView({
  events = [],
  onSelectEvent,
  onSelectSlot,
}: CalendarViewProps) {
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState(new Date());

  const handleViewChange = useCallback((newView: View) => {
    if (newView === "month" || newView === "week" || newView === "day") {
      setView(newView);
    }
  }, []);

  // Sample events for demonstration
  const sampleEvents: Event[] = useMemo(
    () => [
      {
        id: "1",
        title: "Maria Silva - Preenchimento Labial",
        start: new Date(2025, 5, 7, 9, 0),
        end: new Date(2025, 5, 7, 10, 0),
        resource: {
          patient: "Maria Silva",
          procedure: "Preenchimento Labial",
          status: "confirmed",
          phone: "(11) 99999-9999",
        },
      },
      {
        id: "2",
        title: "João Santos - Harmonização Facial",
        start: new Date(2025, 5, 7, 14, 0),
        end: new Date(2025, 5, 7, 15, 30),
        resource: {
          patient: "João Santos",
          procedure: "Harmonização Facial",
          status: "pending",
          phone: "(11) 88888-8888",
        },
      },
      {
        id: "3",
        title: "Ana Costa - Botox",
        start: new Date(2025, 5, 8, 10, 0),
        end: new Date(2025, 5, 8, 11, 0),
        resource: {
          patient: "Ana Costa",
          procedure: "Botox",
          status: "confirmed",
          phone: "(11) 77777-7777",
        },
      },
    ],
    []
  );

  const allEvents = [...events, ...sampleEvents];

  const eventStyleGetter = (event: Event) => {
    let backgroundColor = "#AC9469"; // accent-gold
    let borderColor = "#AC9469";

    if (event.resource?.status === "pending") {
      backgroundColor = "#294359"; // primary-blue
      borderColor = "#294359";
    } else if (event.resource?.status === "cancelled") {
      backgroundColor = "#ef4444"; // red
      borderColor = "#ef4444";
    }

    return {
      style: {
        backgroundColor,
        borderColor,
        color: "#112031", // primary-dark
        border: `2px solid ${borderColor}`,
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "500",
      },
    };
  };

  const messages = {
    allDay: "Dia todo",
    previous: "Anterior",
    next: "Próximo",
    today: "Hoje",
    month: "Mês",
    week: "Semana",
    day: "Dia",
    agenda: "Agenda",
    date: "Data",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "Não há eventos neste período.",
    showMore: (total: number) => `+ Ver mais (${total})`,
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="heading-optima text-accent-gold">
            Calendário de Agendamentos
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDate(new Date())}
            >
              Hoje
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                const newDate = new Date(date);
                if (view === "month") {
                  newDate.setMonth(newDate.getMonth() - 1);
                } else if (view === "week") {
                  newDate.setDate(newDate.getDate() - 7);
                } else {
                  newDate.setDate(newDate.getDate() - 1);
                }
                setDate(newDate);
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                const newDate = new Date(date);
                if (view === "month") {
                  newDate.setMonth(newDate.getMonth() + 1);
                } else if (view === "week") {
                  newDate.setDate(newDate.getDate() + 7);
                } else {
                  newDate.setDate(newDate.getDate() + 1);
                }
                setDate(newDate);
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="flex rounded-md border border-neutral-light">
              {(["month", "week", "day"] as const).map((viewType) => (
                <Button
                  key={viewType}
                  variant={view === viewType ? "default" : "ghost"}
                  size="sm"
                  className="rounded-none first:rounded-l-md last:rounded-r-md"
                  onClick={() => handleViewChange(viewType)}
                >
                  {viewType === "month"
                    ? "Mês"
                    : viewType === "week"
                    ? "Semana"
                    : "Dia"}
                </Button>
              ))}
            </div>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Novo Agendamento
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[600px] w-full">
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            view={view}
            onView={handleViewChange}
            date={date}
            onNavigate={setDate}
            onSelectEvent={onSelectEvent}
            onSelectSlot={onSelectSlot}
            selectable
            eventPropGetter={eventStyleGetter}
            messages={messages}
            step={30}
            timeslots={2}
            min={new Date(0, 0, 0, 8, 0, 0)}
            max={new Date(0, 0, 0, 18, 0, 0)}
            formats={{
              timeGutterFormat: "HH:mm",
              eventTimeRangeFormat: ({ start, end }) =>
                `${moment(start).format("HH:mm")} - ${moment(end).format(
                  "HH:mm"
                )}`,
              dayFormat: "DD/MM",
              dateFormat: "DD",
              monthHeaderFormat: "MMMM YYYY",
              dayHeaderFormat: "dddd, DD/MM",
              dayRangeHeaderFormat: ({ start, end }) =>
                `${moment(start).format("DD/MM")} - ${moment(end).format(
                  "DD/MM"
                )}`,
            }}
            className="rbc-calendar-grupo-us"
          />
        </div>
      </CardContent>
    </Card>
  );
}
