openapi: 3.0.1 # Kept here so IDE can help in formatting during editing. Ignored when specs are merged.
info:
  title: Scheduler APIs
  version: v1

paths:
  /v1/scheduler/tenant:
    post:
      tags:
        - Tenant
      description: Onboard a tenant
      operationId: onboardTenant
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/TenantOnboardRequest"
      responses:
        "200":
          description: Successfully created a tenant
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Tenant"

    get:
      tags:
        - Tenant
      description: Get tenant details
      operationId: getTenant

      responses:
        "200":
          description: Fetched a tenant
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Tenant"

  /v1/scheduler/tenants:
    get:
      tags:
        - Tenant
      description: Get tenant details
      operationId: getTenants

      responses:
        "200":
          description: Fetched a tenant
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Tenant"


  /v1/scheduler/notification:
    post:
      tags:
        - Notification
      description: Schedule a notification
      operationId: scheduleNotification
      parameters:
        - $ref: "#/components/parameters/tenant"
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/NotificationRequest"
      responses:
        "200":
          description: Successfully scheduled a notification
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Notification"


  /v1/scheduler/notification/{request-id}:
    get:
      tags:
        - Notification
      description: Get notification By Id
      operationId: getNotificationByRequestId
      parameters:
        - $ref: "#/components/parameters/tenant"
        - $ref: "#/components/parameters/requestId"
      responses:
        "200":
          description: Get notification by Id
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Notification"
    delete:
      tags:
        - Notification
      description: Delete notification By Id
      operationId: deleteNotificationByRequestId
      parameters:
        - $ref: "#/components/parameters/tenant"
        - $ref: "#/components/parameters/requestId"
      responses:
        "200":
          description: Delete notification by Id

    patch:
      tags:
        - Notification
      description: Patch a notification
      operationId: patchNotification
      parameters:
        - $ref: "#/components/parameters/tenant"
        - $ref: "#/components/parameters/requestId"
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/PatchNotificationRequest"
      responses:
        "200":
          description: Successfully scheduled a notification
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Notification"

  /v1/scheduler/notifications:
    get:
      tags:
        - Notification
      description: Get Notifications for a Tenant
      operationId: getNotifications
      parameters:
        - $ref: "#/components/parameters/tenant"
        - name: executionDate
          in: query
          required: true
          schema:
            type: string
            format: "yyyy-MM-dd"

      responses:
        "200":
          description: Get notifications for a tenant and date
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Notification"

  /v1/scheduler/notification/{request-id}/audit-trace:
    get:
      tags:
        - Audit Trace
      description: Get Audit Trace for a Tenant
      operationId: getAuditTraceForNotification
      parameters:
        - $ref: "#/components/parameters/tenant"
        - $ref: "#/components/parameters/requestId"

      responses:
        "200":
          description: Get Audit Traces for a notification
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/AuditTrace"


components:
  parameters:
    tenant:
      in: header
      name: x-tenant
      required: true
      schema:
        type: string
    notificationStatus:
      in: query
      name: notification-status
      required: false
      schema:
        type: string
    requestId:
      in: path
      name: request-id
      required: true
      schema:
        type: string


  schemas:
    Tenant:
      type: object
      required:
        - tenantId
        - tenantLabel
        - tenantUrn
        - taskStorageConfiguration
        - consumerConfiguration
      properties:
        tenantId:
          type: string
        tenantLabel:
          type: string
        tenantUrn:
          type: string
        taskStorageConfiguration:
          $ref: "#/components/schemas/TaskStorageConfiguration"
        internalConsumerConfiguration:
          $ref: "#/components/schemas/InternalConsumerConfiguration"

    ProvisionedConfiguration:
      type: object
      discriminator:
        propertyName: configurationType
        mapping:
          sqs: '#/components/schemas/TaskStorageConfiguration'
          kafka: '#/components/schemas/InternalConsumerConfiguration'
      oneOf:
        - $ref: '#/components/schemas/TaskStorageConfiguration'
        - $ref: '#/components/schemas/InternalConsumerConfiguration'

    TaskStorageConfiguration:
      type: object
      required:
        - configurationType
        - provisionedType
      properties:
        configurationType:
          type: string
          default: TASK_STORAGE
        provisionedType:
          $ref: "#/components/schemas/ProvisionedType"
        dynamoDatabaseConfiguration:
          $ref: "#/components/schemas/DynamoDatabaseConfiguration"
        streamConsumerConfiguration:
          $ref: "#/components/schemas/SQSConsumerConfiguration"

    InternalConsumerConfiguration:
      type: object
      required:
        - configurationType
        - provisionedType
      properties:
        configurationType:
          type: string
          default: INTERNAL_CONSUMER
        provisionedType:
          $ref: "#/components/schemas/ProvisionedType"
        sqsConsumerConfiguration:
          $ref: "#/components/schemas/SQSConsumerConfiguration"

    ProvisionedType:
      type: string
      enum:
        - POOL
        - ISOLATED

    DatabaseConfiguration:
      type: object
      discriminator:
        propertyName: type
        mapping:
          sqs: '#/components/schemas/DynamoDatabaseConfiguration'
          kafka: '#/components/schemas/PostgresDatabaseConfiguration'
      oneOf:
        - $ref: '#/components/schemas/DynamoDatabaseConfiguration'
        - $ref: '#/components/schemas/PostgresDatabaseConfiguration'

    DynamoDatabaseConfiguration:
      type: object
      required:
        - databaseType
        - tableName
      properties:
        databaseType:
          type: string
          default: DYNAMO
        tableName:
          type: string

    PostgresDatabaseConfiguration:
      type: object
      required:
        - databaseType
        - tableName
      properties:
        databaseType:
          type: string
          default: POSTGRES
        tableName:
          type: string

    ConsumerConfiguration:
      type: object
      discriminator:
        propertyName: type
        mapping:
          sqs: '#/components/schemas/SQSConsumerConfiguration'
          kafka: '#/components/schemas/KafkaConsumerConfiguration'
      oneOf:
        - $ref: '#/components/schemas/SQSConsumerConfiguration'
        - $ref: '#/components/schemas/KafkaConsumerConfiguration'

    SQSConsumerConfiguration:
      type: object
      required:
        - consumerType
        - sqsUrl
      properties:
        consumerType:
          type: string
          default: SQS
        sqsUrl:
          type: string

    KafkaConsumerConfiguration:
      type: object
      required:
        - consumerType
        - kafkaTopic
      properties:
        consumerType:
          type: string
          default: KAFKA
        kafkaTopic:
          type: string

    TenantOnboardRequest:
      type: object
      required:
        - tenantLabel
        - taskStorageConfiguration
        - internalConsumerConfigation
      properties:
        tenantLabel:
          type: string
        taskStorageConfiguration:
          $ref: "#/components/schemas/TaskStorageConfiguration"
        internalConsumerConfigation:
          $ref: "#/components/schemas/InternalConsumerConfiguration"

    SQSDestination:
      type: object
      required:
        - sqsURL
      properties:
        sqsURL:
          type: string

    KafkaDestination:
      type: object
      required:
        - topic
        - key
      properties:
        topic:
          type: string
        key:
          type: string
        headers:
          type: array
          items:
            $ref: "#/components/schemas/KakfaHeader"

    KakfaHeader:
      type: object
      required:
        - key
        - value
      properties:
        key:
          type: string
        value:
          type: string

    NotificationRequest:
      type: object
      required:
        - requestId
        - label
        - destination
        - notificationType
        - executionTime
        - payload
      properties:
        requestId:
          type: string
          example: "db11d5d4-08a1-45cd-8633-6737db1397b1"
        label:
          type: string
        notificationType:
          $ref: "#/components/schemas/NotificationType"
        destination:
          $ref: "#/components/schemas/SQSDestination"
        executionTime:
          type: string
          format: "yyyy-MM-ddTHH:mm:ssZ"
        payload:
          type: string

    Notification:
      type: object
      required:
        - requestId
        - label
        - destination
        - notificationType
        - executionTime
        - payload
        - status
      properties:
        requestId:
          type: string
        label:
          type: string
        destination:
          $ref: "#/components/schemas/SQSDestination"
        notificationType:
          $ref: "#/components/schemas/NotificationType"
        executionTime:
          type: string
          format: "yyyy-MM-ddTHH:mm:ssZ"
        payload:
          type: string
        status:
          $ref: "#/components/schemas/NotificationStatus"

    NotificationType:
      type: string
      enum: ["ONE_TIME"] # Cron to be supported in future

    PatchNotificationRequest:
      type: object
      properties:
        label:
          type: string
        destination:
          $ref: "#/components/schemas/SQSDestination"
        executionTime:
          type: string
          format: "yyyy-MM-ddTHH:mm:ssZ"
        payload:
          type: string

    NotificationStatus:
      type: string
      enum:
        - ACTIVE
        - IN_ACTIVE
        - SEND_SUCCESSFUL
        - SEND_FAILED

    AuditTrace:
      type: object
      required:
        - id
        - notificationRequestId
        - createdAt
        - action
        - payload
        - status
      properties:
        id:
          type: string
        notificationId:
          type: string
        createdAt:
          type: string
          format: "yyyy-MM-ddTHH:mm:ssZ"
        action:
          type: string
          enum:
            - CREATION
            - PATCH
            - PATCH_STATUS
            - LONG_TERM_SCHEDULER_EVICTION
            - NOTIFICATION_DISPATCH
        status:
          type: string
          enum:
            - SUCCESSFUL
            - FAILED
            - IGNORED
        payload:
          type: string
        message:
          type: string

    DynaqException:
      properties:
        errorCode:
          type: string
        description:
          type: string
        httpStatus:
          type: string
        isUserRetryable:
          type: boolean
        owningEntity:
          type: string
        devDescription:
          type: string
        message:
          type: string
