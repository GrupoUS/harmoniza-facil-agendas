# 📅 HARMONIZA FACIL AGENDAS - UNATTENDED EXECUTION PROTOCOL V1.0.0
## PROJECT: HARMONIZA-FACIL-AGENDAS | PRIORITY: CRITICAL | STATUS: ACTIVE

---

## 📋 PROJECT-SPECIFIC PROTOCOL CONFIGURATION

This file implements the **Unattended Execution Protocol V1.0.0** specifically for the **HARMONIZA FACIL AGENDAS** project within the GRUPO US VIBECODE SYSTEM V2.0 ecosystem. This protocol enables full autonomous operation for appointment scheduling system development while maintaining Next.js 14 + Prisma + PostgreSQL best practices.

**Base Protocol**: References `@project-core/rules/01-unattended-execution-protocol.md`
**Project Type**: Next.js 14 + TypeScript + Tailwind CSS + Prisma + PostgreSQL
**Business Domain**: Appointment Scheduling & Calendar Management
**Deployment**: Vercel + Supabase/PostgreSQL + Calendar Integrations

---

## 🚨 HARMONIZA ACTIVATION CRITERIA

### **Autonomous Activation Triggers (HARMONIZA-Specific):**

The Unattended Execution Protocol **AUTOMATICALLY ACTIVATES** for HARMONIZA when:

1. **Initial Plan Approval Received**: User confirms project plan with approved phrases:
   - "YARRR!" (confidence ≥ 8/10 confirmation)
   - "sim" / "yes" / "prossiga" / "proceed" / "ok" / "execute" / "go ahead"

2. **HARMONIZA Project Scope Defined**: Clear boundaries for scheduling system development

3. **Business Logic Compatibility**: Tasks compatible with appointment scheduling domain

4. **Tech Stack Compatibility**: Tasks compatible with HARMONIZA's Next.js + Prisma stack

---

## ⚡ HARMONIZA AUTONOMOUS EXECUTION RULES

### **1. APPOINTMENT SCHEDULING SPECIFIC OPERATIONS**

#### **Calendar & Scheduling Components:**
- ✅ Calendar component creation and modification
- ✅ Appointment booking form development
- ✅ Time slot management components
- ✅ Availability calendar implementation
- ✅ Scheduling dashboard components

#### **Business Logic Implementation:**
- ✅ Appointment CRUD operations
- ✅ Calendar integration logic
- ✅ Time zone handling implementation
- ✅ Notification system components
- ✅ Recurring appointment logic

#### **Database Operations:**
- ✅ Prisma schema modifications (development)
- ✅ Database migration generation
- ✅ Appointment model updates
- ✅ User and provider model enhancements
- ✅ Calendar integration table updates

### **2. HARMONIZA NON-INTERACTIVE COMMANDS**

#### **Next.js + Prisma Specific Commands:**
```bash
# Package Management (HARMONIZA)
npm install --silent
npm run build --silent
npm run dev --silent
npm run lint --fix --silent
npm run type-check --silent

# Prisma Operations
npx prisma generate --silent
npx prisma db push --silent
npx prisma migrate dev --name auto-migration --silent
npx prisma studio --silent

# Database Operations
npm run db:seed --silent
npm run db:reset --silent
npm run db:migrate --silent
```

#### **Scheduling System Development:**
```bash
# Testing (HARMONIZA)
npm test --silent
npm run test:e2e --silent
npm run test:integration --silent
npx playwright test --silent

# Calendar Integration
npm run calendar:sync --silent
npm run calendar:test --silent
```

### **3. HARMONIZA FILE OPERATIONS**

#### **Automatic File Handling (HARMONIZA-Specific):**
- **Calendar Components**: Auto-approve calendar and scheduling UI components
- **API Routes**: Auto-approve appointment and calendar API implementations
- **Database Schema**: Auto-approve Prisma schema updates for scheduling
- **Business Logic**: Auto-approve appointment booking and management logic
- **Integration Files**: Auto-approve calendar provider integration code

#### **Protected Files (Require Manual Approval):**
- **Production Database**: Production database migrations
- **Payment Integration**: Billing and payment processing code
- **External API Keys**: Third-party calendar service configurations
- **Security Settings**: Authentication and authorization configurations
- **Production Configs**: Production deployment and environment settings

---

## 🔒 HARMONIZA SAFETY MECHANISMS

### **1. SCHEDULING SYSTEM SCOPE LIMITATIONS**

**Autonomous execution applies ONLY to:**
- Calendar and appointment UI component development
- Appointment booking and management logic
- Database schema updates for scheduling features
- Calendar integration and synchronization
- Notification and reminder system implementation
- Testing and quality assurance for scheduling features

**NEW APPROVAL REQUIRED for:**
- Payment processing and billing system changes
- Third-party calendar service integrations (Google, Outlook)
- Production database schema changes
- Security-sensitive authentication modifications
- External API integrations beyond approved scope

### **2. HARMONIZA ERROR HANDLING**

#### **Scheduling-Specific Error Recovery:**
```markdown
### Calendar Integration Error Recovery - [TIMESTAMP]
**Error**: Calendar API connection failed
**Autonomous Action**: Use mock calendar data, retry with exponential backoff
**Fallback**: Switch to local calendar storage for development
**Result**: Development continues with fallback calendar system
```

#### **Database Migration Error Recovery:**
```markdown
### Prisma Migration Error Recovery - [TIMESTAMP]
**Error**: Database migration failed due to constraint conflict
**Autonomous Action**: Generate rollback migration, apply safe schema changes
**Fallback**: Use shadow database for migration testing
**Result**: Migration successful with conflict resolution
```

### **3. HARMONIZA EMERGENCY OVERRIDE**

**Override Activation**: Include this exact phrase in user prompt:
```
"EXECUTE WITH MANUAL SUPERVISION"
```

**HARMONIZA Override Use Cases:**
- Complex calendar integration debugging
- Production database migration issues
- Payment system integration problems
- Third-party API integration challenges
- Performance optimization requiring manual analysis

---

## 📊 HARMONIZA MONITORING INTEGRATION

### **1. Performance Metrics (HARMONIZA-Specific)**

```javascript
// HARMONIZA Performance Tracking
const harmonizaMetrics = {
  appointmentBookingTime: {
    target: 2000, // 2 seconds booking process
    current: 0,
    autonomous: true
  },
  calendarLoadTime: {
    target: 1500, // 1.5 seconds calendar load
    current: 0,
    autonomous: true
  },
  databaseQueryTime: {
    target: 500, // 500ms average query time
    current: 0,
    autonomous: true
  },
  buildTime: {
    target: 90000, // 1.5 minutes (complex scheduling logic)
    current: 0,
    autonomous: true
  }
};
```

### **2. Business Logic Quality Assurance (HARMONIZA)**

```javascript
// HARMONIZA Quality Standards
const harmonizaQuality = {
  appointmentAccuracy: {
    target: 100, // No double-booking or conflicts
    autonomous: true
  },
  calendarSyncReliability: {
    target: 99, // 99% calendar sync success rate
    autonomous: true
  },
  timeZoneHandling: {
    target: 100, // Accurate time zone conversions
    autonomous: true
  },
  notificationDelivery: {
    target: 95, // 95% notification delivery rate
    autonomous: true
  }
};
```

---

## 🔧 HARMONIZA INTEGRATION EXAMPLES

### **1. Appointment Booking Component (Autonomous)**

```typescript
// Autonomous appointment booking component for HARMONIZA
interface AppointmentBookingProps {
  providerId: string;
  availableSlots: TimeSlot[];
  onBookingComplete: (appointment: Appointment) => void;
  className?: string;
}

interface TimeSlot {
  id: string;
  startTime: Date;
  endTime: Date;
  isAvailable: boolean;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  providerId,
  availableSlots,
  onBookingComplete,
  className = ''
}) => {
  // Autonomous implementation with HARMONIZA scheduling logic
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleBooking = async () => {
    if (!selectedSlot) return;
    
    setIsBooking(true);
    try {
      // Autonomous booking logic
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          providerId,
          slotId: selectedSlot.id,
          startTime: selectedSlot.startTime,
          endTime: selectedSlot.endTime,
          customer: customerInfo
        })
      });

      if (!response.ok) throw new Error('Booking failed');
      
      const appointment = await response.json();
      console.log('[AUTONOMOUS] Appointment booked successfully:', appointment.id);
      onBookingComplete(appointment);
      
    } catch (error) {
      console.error('[AUTONOMOUS] Booking error:', error);
      // Autonomous error handling - show user-friendly message
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className={`appointment-booking ${className}`}>
      <h3 className="text-xl font-semibold mb-4">Book Appointment</h3>
      
      {/* Time Slot Selection */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {availableSlots.map((slot) => (
          <button
            key={slot.id}
            onClick={() => setSelectedSlot(slot)}
            disabled={!slot.isAvailable}
            className={`p-3 rounded-lg border ${
              selectedSlot?.id === slot.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            } ${!slot.isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {format(slot.startTime, 'HH:mm')}
          </button>
        ))}
      </div>

      {/* Customer Information Form */}
      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Full Name"
          value={customerInfo.name}
          onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
          className="w-full p-3 border border-gray-200 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={customerInfo.email}
          onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
          className="w-full p-3 border border-gray-200 rounded-lg"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={customerInfo.phone}
          onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full p-3 border border-gray-200 rounded-lg"
        />
        <textarea
          placeholder="Additional Notes (Optional)"
          value={customerInfo.notes}
          onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
          className="w-full p-3 border border-gray-200 rounded-lg h-24"
        />
      </div>

      {/* Booking Button */}
      <button
        onClick={handleBooking}
        disabled={!selectedSlot || !customerInfo.name || !customerInfo.email || isBooking}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isBooking ? 'Booking...' : 'Confirm Appointment'}
      </button>
    </div>
  );
};

export default AppointmentBooking;
```

### **2. Calendar API Route (Autonomous)**

```typescript
// Autonomous calendar API route for HARMONIZA
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

// Autonomous validation schema
const createAppointmentSchema = z.object({
  providerId: z.string().uuid(),
  slotId: z.string().uuid(),
  startTime: z.string().datetime(),
  endTime: z.string().datetime(),
  customer: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    notes: z.string().optional()
  })
});

export async function POST(request: NextRequest) {
  try {
    // Autonomous request validation
    const body = await request.json();
    const validatedData = createAppointmentSchema.parse(body);
    
    // Autonomous conflict checking
    const conflictingAppointment = await prisma.appointment.findFirst({
      where: {
        providerId: validatedData.providerId,
        startTime: {
          lt: new Date(validatedData.endTime)
        },
        endTime: {
          gt: new Date(validatedData.startTime)
        },
        status: {
          not: 'cancelled'
        }
      }
    });

    if (conflictingAppointment) {
      console.log('[AUTONOMOUS] Appointment conflict detected');
      return NextResponse.json(
        { error: 'Time slot no longer available' },
        { status: 409 }
      );
    }

    // Autonomous appointment creation
    const appointment = await prisma.appointment.create({
      data: {
        providerId: validatedData.providerId,
        startTime: new Date(validatedData.startTime),
        endTime: new Date(validatedData.endTime),
        customerName: validatedData.customer.name,
        customerEmail: validatedData.customer.email,
        customerPhone: validatedData.customer.phone,
        notes: validatedData.customer.notes,
        status: 'confirmed'
      },
      include: {
        provider: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });

    console.log('[AUTONOMOUS] Appointment created successfully:', appointment.id);
    
    // Autonomous notification trigger (would integrate with notification service)
    // await sendAppointmentConfirmation(appointment);
    
    return NextResponse.json(appointment, { status: 201 });
    
  } catch (error) {
    console.error('[AUTONOMOUS] Appointment creation error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid appointment data', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}
```

---

## ✅ HARMONIZA IMPLEMENTATION CHECKLIST

Before activating autonomous execution for HARMONIZA, verify:

- [ ] **Next.js 14 Environment**: Project running on Next.js 14 with App Router
- [ ] **Prisma Configuration**: Database schema and migrations configured
- [ ] **PostgreSQL Connection**: Database connection established and tested
- [ ] **TypeScript Configuration**: Strict TypeScript with scheduling domain types
- [ ] **Calendar Integration**: Calendar provider APIs configured (if applicable)
- [ ] **Testing Framework**: Comprehensive testing including appointment logic
- [ ] **Time Zone Handling**: Proper time zone conversion and storage
- [ ] **Notification System**: Email/SMS notification system configured

---

## 🎯 HARMONIZA SUCCESS VALIDATION

**Autonomous Execution Successful for HARMONIZA When:**
- All appointment scheduling components function without conflicts
- Database operations complete successfully with proper data integrity
- Calendar integration works reliably with external providers
- Time zone handling is accurate across all appointment operations
- Notification system delivers confirmations and reminders successfully
- All tests pass including appointment booking and management scenarios

---

## 🔄 HARMONIZA CONTINUOUS IMPROVEMENT

### **Scheduling-Focused Learning:**
- Log all autonomous decisions related to appointment scheduling logic
- Track calendar integration patterns and optimization opportunities
- Monitor database performance for appointment queries and operations
- Analyze booking conversion rates and user experience metrics
- Document HARMONIZA-specific scheduling autonomous execution patterns

### **Performance Optimization:**
- Optimize appointment booking flow for faster user experience
- Improve calendar synchronization efficiency and reliability
- Enhance database query performance for scheduling operations
- Streamline notification delivery and reduce latency

---

**ENFORCEMENT**: This HARMONIZA-specific protocol extends the base Unattended Execution Protocol V1.0.0 with appointment scheduling optimizations and business logic considerations. All autonomous operations must comply with scheduling system requirements and GRUPO US quality standards.

**VERSION**: 1.0.0 | **EFFECTIVE**: Immediately | **REVIEW**: Monthly optimization based on scheduling system performance
